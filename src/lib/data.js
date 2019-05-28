let CONFIGURATION = {};

function getEntries(query) {
  const client = require("contentful").createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_CDA_TOKEN
  });

  return client
    .getEntries(query)
    .then(res => {
      const entries = res.items.map(item => {
        return {
          id: item.sys.id,
          ...item.fields
        };
      });
      return entries;
    })
    .catch(e => {
      console.log(e);
    });
}

function upload(imgDataURL, fileName) {
  const mgmtClient = require("contentful-management").createClient({
    accessToken: process.env.REACT_APP_CMA_TOKEN
  });

  const contentType = "image/png";

  return mgmtClient.getSpace(process.env.REACT_APP_SPACE_ID).then(space => {
    return space
      .getEnvironment("master")
      .then(environment => {
        return environment
          .createUpload({
            file: dataURLToBlob(imgDataURL),
            contentType,
            fileName
          })
          .then(upload => {
            return space
              .createAsset({
                fields: {
                  title: {
                    "en-US": fileName
                  },
                  file: {
                    "en-US": {
                      fileName: fileName,
                      contentType: contentType,
                      uploadFrom: {
                        sys: {
                          type: "Link",
                          linkType: "Upload",
                          id: upload.sys.id
                        }
                      }
                    }
                  }
                }
              })
              .then(asset => asset.processForLocale("en-US"))
              .then(asset => asset.publish())
              .then(asset => asset);
          });
      })
      .catch(err => {
        console.log(err);
      });
  });
}

function dataURLToBlob(dataURL) {
  var byteString = atob(dataURL.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/png" });
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const AppreciationStationConfig = (function() {
  function getConfig() {
    if (isEmpty(CONFIGURATION)) {
      return getEntries({
        content_type: "appreciationStationConfiguration",
        include: 1
      }).then(entries => {
        CONFIGURATION = entries[0];
        return CONFIGURATION;
      });
    } else {
      return Promise.resolve(CONFIGURATION);
    }
  }

  return {
    getMembers: function() {
      return getConfig().then(config => {
        return config.members;
      });
    },
    getMemberMessages: function() {
      return getConfig().then(config => {
        return config.memberMessages;
      });
    },
    getBackgroundImages: function() {
      return getConfig().then(config => {
        return config.backgroundImages.map(img => {
          return {
            id: img.sys.id,
            ...img.fields
          };
        });
      });
    },
    uploadImage: function(imgDataURL, fileName) {
      return upload(imgDataURL, fileName).then(asset => {
        return {
          id: asset.sys.id,
          ...asset.fields
        };
      });
    }
  };
})();
