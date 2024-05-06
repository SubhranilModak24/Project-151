AFRAME.registerComponent('gltf-loader', {
    schema: {
      modelUrl: { type: 'string' }
    },
  
    init: function () {
      var el = this.el;
      var data = this.data;
  
      // Load GLTF model
      var gltfModel = document.createElement('a-entity');
      gltfModel.setAttribute('gltf-model', data.modelUrl);
      el.appendChild(gltfModel);
    }
  });
  