import routesJson from '@/assets/routes.json';
import _ from 'lodash';

export async function getSolutionsFromNode(node){
  if(node.solutions){
    return node.solutions;
  }else{
    let arr = node.relationships.has_solution;
    return routesJson.solutions.filter(item => _.includes(arr, item.code));
  }
}

export async function getDocumentsFromNode(node){
  if(node.documents){
    return node.documents;
  }else{
    let arr = node.relationships.has_document;
    return routesJson.documents.filter(item => _.includes(arr, item.code));
  }
}

export async function getInputsFromNode(currentNode){
  if(currentNode.inputs){
    return currentNode.inputs;
  }else{
    let arr = currentNode.relationships.require_input || currentNode.relationships.has_input;
    return routesJson.inputs.filter(item => _.includes(arr, item.code));
  }
}

export async function getChatOptionsFromNode(node){
  if(node.childrens){
    return node.childrens;
  }else{
    let arr = node.relationships.parent_of;
    return routesJson.nodes.filter(item => _.includes(arr, item.code));
  }
}
