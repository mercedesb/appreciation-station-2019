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
      if (process.env.REACT_APP_USE_TEST_DATA !== "false") {
        return Promise.resolve([
          {
            name: "Test mentor",
            isMentor: true
          },
          {
            name: "Test mentee",
            isMentee: true
          },
          {
            name: "Test speaker",
            isSpeaker: true
          },
          {
            name: "Test sponsor",
            isSponsor: true
          }
        ]);
      } else {
        return getConfig().then(config => {
          return config.members;
        });
      }
    },
    getMemberMessages: function() {
      if (process.env.REACT_APP_USE_TEST_DATA !== "false") {
        return Promise.resolve([
          {
            text: "Thank you {NAME} for being great!",
            isMentor: true,
            isMentee: true,
            isSpeaker: true,
            isSponsor: true
          },
          {
            text: "We appreciate you {NAME}!",
            isMentor: true,
            isMentee: true,
            isSpeaker: true,
            isSponsor: true
          }
        ]);
      } else {
        return getConfig().then(config => {
          return config.memberMessages;
        });
      }
    },
    getBackgroundImages: function() {
      if (process.env.REACT_APP_USE_TEST_DATA !== "false") {
        return Promise.resolve([
          {
            file: {
              url: "http://testurl1.com"
            },
            maxTextWidth: 0.75,
            textPosition: "topLeft"
          }
        ]);
      } else {
        return getConfig().then(config => {
          return config.backgroundImages.map(img => {
            const { image, ...otherFields } = img.fields;
            return {
              id: img.sys.id,
              ...image.fields,
              ...otherFields
            };
          });
        });
      }
    }
  };
})();
