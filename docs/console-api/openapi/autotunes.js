module.exports = 
{
  "openapi": "3.0.0",
  "info": {
    "title": "console/v1",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://api.statsig.com/console/v1"
    }
  ],
  "components": {
    "securitySchemes": {
      "STATSIG-API-KEY": {
        "type": "apiKey",
        "in": "header",
        "name": "STATSIG-API-KEY"
      }
    }
  },
  "security": [
    {
      "STATSIG-API-KEY": []
    }
  ],
  "paths": {
    "/autotunes": {
      "get": {
        "tags": [
          "autotunes"
        ],
        "summary": "Read All Autotunes",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      },
      "post": {
        "tags": [
          "autotunes"
        ],
        "summary": "Create Autotune",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "My Autotunes Are Best",
                  "description": "helpful summary of what this Aututune is",
                  "variants": [
                    {
                      "name": "red",
                      "json": {
                        "foo": "boo"
                      }
                    },
                    {
                      "name": "blue",
                      "json": {}
                    }
                  ],
                  "successEvent": "purchase_item",
                  "explorationWindow": "1hr",
                  "attributionWindow": "2hr",
                  "winnerThreshold": "99%"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/autotunes/{autotune_id}": {
      "get": {
        "tags": [
          "autotunes"
        ],
        "summary": "Read a Single Segment",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      },
      "delete": {
        "tags": [
          "autotunes"
        ],
        "summary": "Delete Autotune",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      },
      "post": {
        "tags": [
          "autotunes"
        ],
        "summary": "Update Autotune",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "description": "helpful summary of what this Aututune is",
                  "variants": [
                    {
                      "name": "red",
                      "json": {
                        "color": "red"
                      }
                    },
                    {
                      "name": "blue",
                      "json": {
                        "color": "blue"
                      }
                    }
                  ],
                  "successEvent": "purchase_item",
                  "explorationWindow": "1hr",
                  "attributionWindow": "2hr",
                  "winnerThreshold": "99%"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    }
  }
}