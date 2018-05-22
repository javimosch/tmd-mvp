<template>
<div class="ChatTestOne container">
  <label>Chat</label>
  <div class="ChatWindow">
    <div class="d-flex"
         v-show="hasButtons">
      <ul>
        <li v-for="(i,k) in messages"
            :key="k"
            :class="i.className"
            v-html="i.text">
        </li>
      </ul>
      <button v-show="buttons.continue"
              @click="continueClick()">Continue</button>
    </div>
  </div>
  <input :disabled="userInputDisabled"
         type="text"
         v-model="userOutput"
         v-on:keyup.enter="onEnterClick" />
  <label>Liza thoughts</label>
  <ul>
    <li v-for="(i,k) in thoughts"
        :key="k"
        v-html="i.html"></li>
  </ul>
  <label>Component data</label>
  <textarea class="card" v-html="dataAsString">
  	
  </textarea>
  <label>Database fields</label>
  <textarea v-html="fieldsAsString"></textarea>
  <label>Database benefits</label>
  <textarea v-html="benefitsAsString"
            style="min-height: 500px"></textarea>
</div>

</template>

<script>
import _ from 'lodash'
const BOOKING_STATE = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS'
}
const BOT_STATE = {
  WELCOME: 'WELCOME', // welcome bla bla
  WELCOME_WAIT_USER_NAME: 'WELCOME_WAIT_USER_NAME',
  ASK_CUMULATIVE_CONDITIONS: 'ASK_CUMULATIVE_CONDITIONS', // ask one question and jumpts into SEARCHING
  ASK_ALTERNATIVE_CONDITIONS: 'ASK_ALTERNATIVE_CONDITIONS',
  SEARCHING: 'SEARCHING', // try to match benefits, and come back to QUESTIONS //IF MATCH GOES TO BENEFIT_MATCH
  BENEFIT_MATCH: 'BENEFIT_MATCH', // show matched benefit and wait choice (continue or stop here)
  REQUIRED_FIELDS: 'REQUIRED_FIELDS',
  ATTACHMENTS: 'ATTACHMENTS', // ask for attachment for matched benefits 
  // before each upload you can choice continue and upload later
  // jumps into
  PAYMENT: 'PAYMENT',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  ASK_FIELD_CONFIRMATION: 'ASK_FIELD_CONFIRMATION',
  WAIT_FIELD_CONFIRMATION: 'WAIT_FIELD_CONFIRMATION'
}

export default {
  components: {

  },
  layout: 'app',
  name: 'ChatTestOne',
  props: [],
  fetch() {},
  async asyncData() {
    return {}
  },
  computed: {
  	dataAsString(){
  		return JSON.stringify(_.omit(this.$data,['benefits','fields','availableBenefits','blacklistedBenefits','messages','thoughts']),null,2)
  	},
    hasButtons() {
      var r = false
      for (var x in this.buttons) {
        if (this.buttons[x] === true) {
          r = true
        }
      }
      return true
    },
    fieldsAsString() {
      return JSON.stringify(this.fields, null, 2)
    },
    benefitsAsString() {
      return JSON.stringify(this.benefits, null, 2)
    }
  },
  methods: {
    onEnterClick() {
      this.enterPress = true
    },
    grabField(f) {
      return this.fields.filter(ff => ff.name === f.cumulative_condition_field)[0]
    },
    grabAcumulativeField() {
      var r = null

      if (this.availableBenefits.length === 0) {
        return null
      }

      for (var x = 0; x < this.availableBenefits.length; x++) {
        if (this.availableBenefits[x].cumulative_conditions.length > 0) {
          r = this.availableBenefits[x].cumulative_conditions[0]
          break
        }
      }

      return r
    }
  },
  destroyed() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  created() {},
  watch: {
  	botState(v){
  		this.thoughts.push({
            html: `I moved to ${v}`
          })
  	}
  },
  mounted() {
    var self = this
    if (!process.server) {
      this.availableBenefits = this.benefits

      this.interval = setInterval(function() {
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////

        if (self.botState === BOT_STATE.WELCOME && self.botOutput === null) {
          self.messages.push({
            text: 'Welcome message, next, I will ask you questions to know about you. Then, I will iterate between questions and searching until I match some benefit for you. Once you are ok, I will ask you for extra fields and attachments, then payment. Then, the booking will be done and my job is done. First, please tell me your name (or nickname).'
          })
          self.botState = BOT_STATE.WELCOME_WAIT_USER_NAME
          self.userInputDisabled = false
        }
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////

        if (self.botState === BOT_STATE.WELCOME_WAIT_USER_NAME && self.enterPress && self.userOutput !== '') {
          self.messages.push({
            text: self.userOutput,
            className: 'isUser'
          })
          self.messages.push({
            text: 'Welcome ' + self.userOutput + '. You are ready? Lets start!'
          })
          self.collectedData.nickname = self.userOutput
          self.userOutput = ''
          self.userInputDisabled = true,
          self.botState = BOT_STATE.ASK_CUMULATIVE_CONDITIONS
          self.enterPress = false
        }

        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////

        if (self.botState === BOT_STATE.ASK_CUMULATIVE_CONDITIONS) {
          if (!self.selectedAcumulativeField) {
            // traverse benefits (already sorted by priority, simple to complex)
            // grab first

            var field = self.grabAcumulativeField()

            if (field === null) {
              self.botState = BOT_STATE.ASK_ALTERNATIVE_CONDITIONS
            } else {
              field = self.grabField(field)

              self.selectedAcumulativeField = field

            }
          } else {
            if (!self.enterPress) {
              if (self.botOutput !== true) {
                // we display the question
                self.messages.push({
                  text: 'So, for start, ' + self.selectedAcumulativeField.question
                })
                self.userInputDisabled = false
                self.botOutput = true

              } else {
                // wait user
              }
            } else {

              if (!self.isAnswerConfirmed) {
                self.botPrevState = self.botState
                self.botState = BOT_STATE.ASK_FIELD_CONFIRMATION
                self.fieldToConfirm = self.selectedAcumulativeField
              } else {
                self.userInputDisabled = true
                self.collectedData[self.selectedAcumulativeField.name] = self.userAnswer
                self.userAnswer = ''
                self.enterPress = false
                self.botState = BOT_STATE.SEARCHING
                self.userInputDisabled = true
              }

            }

          }

        }

        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        if (self.botState === BOT_STATE.ASK_FIELD_CONFIRMATION) {
          if (self.enterPress) {
            self.userAnswer = self.userOutput
            self.userOutput = ''

            self.messages.push({
              text: 'Confirm?'
            })
            self.messages.push({
              text: self.userAnswer,
              className: 'isUser'
            })
            self.botState = BOT_STATE.WAIT_FIELD_CONFIRMATION
          } else {
            // wait user
          }
        }

        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        if (self.botState === BOT_STATE.WAIT_FIELD_CONFIRMATION) {
          if (self.enterPress) {
            if ([
                'no',
                'nein',
                'na',
                'nop'
              ].includes(self.userOutput.toLowerCase())) {
              self.botOutput = false
              self.enterPress = false
              self.messages.push({
                text: self.userOutput,
                className: 'isUser'
              })
              self.userOutput = ''
              self.botState = self.botPrevState
            } else {
              self.thoughts.push({
              	html:'confirm result is '+self.userOutput.toLowerCase()
              })
              self.isAnswerConfirmed = true
            }
            self.enterPress = false
          }
        }

        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        if (self.botState === BOT_STATE.SEARCHING) {
          self.messages.push({
            text: 'Let me search...'
          })
          self.thoughts.push({
            html: `So ${self.collectedData.nickname} ${self.selectedAcumulativeField.short_name} is ${self.collectedData[self.selectedAcumulativeField.name]}, let see if I can match a benefit!`
          })
          self.botState = BOT_STATE.ASK_ALTERNATIVE_CONDITIONS
        }

        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        // ///////////////////////////////////////////////////////////////////////////////////////
        if (self.botState === BOT_STATE.ASK_ALTERNATIVE_CONDITIONS) {
          self.messages.push({
            text: 'I\'m done for now, get lost!'
          })
          self.botState = null
        }

      }, 1000)
    }
  },
  data() {
    return {
      collectedData: {

      },
      fieldToConfirm: null,
      isAnswerConfirmed: false,
      userAnswer: '',
      selectedAcumulativeField: null,
      matchedBenefits: [],
      blacklistedBenefits: [],
      availableBenefits: [],
      userInputDisabled: true,
      userOutput: '',
      enterPress: false,
      messages: [],
      botState: BOT_STATE.WELCOME,
      botPrevState: '',
      botOutput: null,
      buttons: {
        continue: false
      },
      thoughts: [],
      benefits: [
        {
          'name': 'bourse_crous_17_18',
          'complete_name': 'Bourse étudiante sur critères sociaux (CROUS) - 2017-2018 ',
          'short_name': 'Bourse étudiante',
          'description': 'Bourse pour les étudiants, selon leurs revenus',

          'cumulative_conditions': [
            {
              'cumulative_condition_field': 'email',
              'required_value': 'ok'
            },
            {
              'cumulative_condition_field': 'telephone_fixe',
              'required_value': 'ggiuj'
            },
            {
              'cumulative_condition_field': 'telephone_portable',
              'required_value': '354,0'
            }
          ],

          'alternative_conditions': [
            {
              'alternative_condition_field': 'telephone_fixe',
              'required_value': '32,0',
              'alternative_number': '1,0'
            },
            {
              'alternative_condition_field': 'prenom',
              'required_value': 'yukt',
              'alternative_number': '1,0'
            },
            {
              'alternative_condition_field': 'nom_de_famille',
              'required_value': 'stht',
              'alternative_number': '1.1'
            },
            {
              'alternative_condition_field': 'telephone_portable',
              'required_value': 'tehth',
              'alternative_number': '1.2'
            }
          ],

          'required_fields_Groups': [
            'informations_de_base',
            'contact'
          ],

          'required_fields': [
            'email',
            'nom_de_famille',
            'telephone_portable',
            'prenom'
          ],

          'alternative_fields': [
            {
              'alternative_field': 'telephone_fixe',
              'alternative_number': '2,0'
            },
            {
              'alternative_field': 'telephone_portable',
              'alternative_number': '2,0'
            }
          ],

          'fields_under_conditions': [
            {
              'field_under_condition': 'telephone_fixe',
              'condition_field': '',
              'required_value': 'gg'
            },
            {
              'field_under_condition': 'prenom',
              'condition_field': '',
              'required_value': '32,0'
            }
          ],

          'required_attachments': [
            {
              'required_attachment': 'rib',
              'original_required': 'Non',
              'number_of_copies': 3
            },
            {
              'required_attachment': 'justificatif_domicile',
              'original_required': 'Non',
              'number_of_copies': 8
            }
          ],

          'alternative_attachments': [
            {
              'alternative_attachment': 'justificatif_domicile',
              'original_required': 'Non',
              'number_of_copies': 1,
              'alternative_number': '2,0'
            },
            {
              'alternative_attachment': 'rip',
              'original_required': 'Oui',
              'number_of_copies': 3,
              'alternative_number': '2.1'
            },
            {
              'alternative_attachment': 'contrat_location_2017_2018',
              'original_required': 'Non',
              'number_of_copies': 2,
              'alternative_number': '2.2'
            }
          ],

          'attachments_under_conditions': [
            {
              'attachment_under_condition': 'justificatif_domicile',
              'original_required': 'Non',
              'number_of_copies': 2,
              'condition_field': 'nom_de_famille',
              'required_value': 'hh'
            },
            {
              'attachment_under_condition': 'rip',
              'original_required': 'Oui',
              'number_of_copies': 3,
              'condition_field': 'telephone_fixe',
              'required_value': '8,0'
            }
          ]

        }
      ],
      fields: [
        {
          'name': 'email',
          'complete_name': 'Adresse e-mail',
          'short_name': 'E-mail',
          'group': 'contact',
          'order': '',
          'question': 'Quelle est votre adresse e-mail ?',
          'hint': 'Entrez votre adresse e-mail. Celle-ci doit être régulièrement consultée car nous pourrons communiquer avec vous par email.',
          'after_answer': 'Merci',
          'type': 'email'
        },
        {
          'name': 'nom_de_famille',
          'complete_name': 'Nom de famille',
          'short_name': 'Nom de famille',
          'group': 'informations_de_base',
          'order': '',
          'question': 'Quel est votre nom de famille ?',
          'hint': 'Entrez votre nom de famille, avec les éventuels accents ou tirets.',
          'after_answer': 'Très bien, c\'est noté',
          'type': 'text'
        }
      ]
    }
  }
}

</script>

<style lang="scss" scoped="">
.ChatTestOne {}

textarea {
  min-width: 100%;
  min-height: 300px;
  background-color: #333;
  color: white;
  border: 0px;
}

label {
  display: block;
  margin-top: 20px;
}

li.isUser {
  text-align: right;
  color: blue;
  font-size: 14px;
}
</style>
