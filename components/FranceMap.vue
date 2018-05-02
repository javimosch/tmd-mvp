<template>
<div class="FranceMap d-none d-sm-block">
  <div class="row no-gutters">
    <div class="col-12 col-md-12">
      <h2 class="text-center"
          v-html="defaulText"></h2>
      <h2 class="text-center"
          v-html="value||'&nbsp;'"></h2>
    </div>
    <div class="col-12 col-md-12 d-flex justify-content-center p-relative">
      <div class="map">
      </div>
    </div>
  </div>
</div>

</template>

<script>
import * as d3 from 'd3';
export default {
  name: 'FranceMap',
  props: [],
  fetch() {},
  data() {
    return {
      value: '',
      defaulText:'Découvrez les aides dans votre région'
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {

  },
  created() {},
  mounted() {
    if (process.server) {
      return
    }
    var self = this
    // プロジェクション設定 
    var projection = d3
      .geoMercator() // 投影法の指定
      .scale(1600) // スケール（ズーム）の指定
      .rotate([
        -0.25,
        0.25,
        0
      ]) // 地図を回転する　[x,y,z]
      .center([
        11.0,
        46.5
      ]) // 中心の座標を指定

    // パスジェネレーター生成
    var path = d3.geoPath().projection(projection)

    // 地図用のステージ(SVGタグ)を作成
    var map = d3.select('.map')
      .append('svg')
      .attr('width', 450)
      .attr('height', 450)

    // 地理データ読み込み
    d3.json('/regions.geojson.txt').then(drawMaps)

    function drawMaps(geojson) {
      console.log('FEATU', geojson.features)

      geojson.features = geojson.features.map((f, index) => {
        f.id = index
        // f.nro = parseInt(Math.random()*10).toFixed(0)
        f.properties.value = data().find(d => d.code === f.properties.code).benefits_text
        return f
      })

      // console.log(JSON.stringify(geojson.features.map(f => f.properties), null, 2))

      map.selectAll('path')
        .data(geojson.features)
        .enter()
        .append('path')
        .attr("class", "regions")
        .attr('d', path) // パスジェネレーターを使ってd属性の値を生成している
        .attr('fill', '#105BB1')
        .attr('fill-opacity', 1)
        .attr('stroke', 'white')
        .style("cursor", "pointer")
        .on('mouseover', function(d, i) {
          self.value = d.properties.value + ' aides'
          
        })
        .on('mouseout', function(d, i) {})
        .on('click', function(d, i) {
          $ma.trackEvent({
            category:'map_region',
            action:'click',
            label:d.properties.nom.toLowerCase().replace(new RegExp(/ /g),''),
            data:{
              regionName: d.properties.nom
            }
          })
          window.scroll({
            top: 0,
            behavior: 'smooth'
          })
        })
        
    }
  }
}

function data() {
  return [
    {
      'code': '11',
      'nom': 'Île-de-France',
      'benefits_text': '1 250'
    },
    {
      'code': '24',
      'nom': 'Centre-Val de Loire',
      'benefits_text': '240'
    },
    {
      'code': '27',
      'nom': 'Bourgogne-Franche-Comté',
      'benefits_text': '260'
    },
    {
      'code': '28',
      'nom': 'Normandie',
      'benefits_text': '310'
    },
    {
      'code': '32',
      'nom': 'Hauts-de-France',
      'benefits_text': '630'
    },
    {
      'code': '44',
      'nom': 'Grand Est',
      'benefits_text': '570'
    },
    {
      'code': '52',
      'nom': 'Pays de la Loire',
      'benefits_text': '390'
    },
    {
      'code': '53',
      'nom': 'Bretagne',
      'benefits_text': '330'
    },
    {
      'code': '75',
      'nom': 'Nouvelle-Aquitaine',
      'benefits_text': '590'
    },
    {
      'code': '01',
      'nom': 'Guadeloupe',
      'benefits_text': '80'
    },
    {
      'code': '02',
      'nom': 'Martinique',
      'benefits_text': '90'
    },
    {
      'code': '03',
      'nom': 'Guyane',
      'benefits_text': '90'
    },
    {
      'code': '04',
      'nom': 'La Réunion',
      'benefits_text': '140'
    },
    {
      'code': '06',
      'nom': 'Mayotte',
      'benefits_text': '80'
    },
    {
      'code': '76',
      'nom': 'Occitanie',
      'benefits_text': '580'
    },
    {
      'code': '84',
      'nom': 'Auvergne-Rhône-Alpes',
      'benefits_text': '820'
    },
    {
      'code': '93',
      'nom': 'Provence-Alpes-Côte d’Azur',
      'benefits_text': '530'
    },
    {
      'code': '94',
      'nom': 'Corse',
      'benefits_text': '130'
    }
  ]
}

</script>

<style lang="scss" scoped="">
.FranceMap {
  margin: 80px 0px;
}

.regions:hover{
  cursor: pointer;
}

.data {
  position: absolute;
}

.map {
  background: transparent;
}
</style>
