param acrName string
param aksName string

module acr 'modules/acr.bicep' = {
  name: 'acrDeployment'
  params: {
    acrName: acrName
  }
}

module aks 'modules/aks.bicep' = {
  name: 'aksDeployment'
  params: {
    aksName: aksName
    acrId: acr.outputs.acrId
  }
}

output acrLoginServer string = acr.outputs.acrLoginServer
output aksName string = aks.outputs.aksName
