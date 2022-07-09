const settings = {
  "name": "machupicchutravellers",
  "state": {
    "frontity": {
      "url": "https://mptravellers.wildfreewalkingtours.com/",
      "title": "Machu Picchu Travellers",
      "description": "Machu Picchu tours, short Inka trail,"
    }
  },
  "packages": [
    {
      "name": "mptravellers",
      "state": {
        "theme": {
          "menu": [
            ["About", "/"],
            ["Classic Machu Picchu", "/classic-machu-picchu/"],
            ["Hiking Machu Picchu", "/hiking-machu-picchu/"],
            ["Blog", "/blog/"],       
            ["Contact", "/contact/"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },

    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://mptravellers.wildfreewalkingtours.com/wp-json/",

          "params": {
            per_page: 100,
          },

          "postTypes": [
            {
              type: "classictours",
              endpoint: "classictours",
              archive: "classictours",
            },
            {
              type: "hikingtours",
              endpoint: "hikingtours",
              archive: "hikingtours",
            },

            {
              type: "blogposts",
              endpoint: "blogposts",
              archive: "blogposts",
            },
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
