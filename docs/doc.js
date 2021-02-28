export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description:
      "This is a a Bots implementation. Thi is a API that serves to main endpoints: 'bots' and 'messages', besides, this documentation is in 'doc' endpoint.",
    version: '1.0.0',
    title: 'Bots API',
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      email: 'sergio@spantano.com',
    },
  },
  tags: [
    {
      name: 'bots',
      description: 'Bots operations',
      externalDocs: {
        description: 'Find out more',
        url: 'http://bit.ly/srpantano',
      },
    },
    {
      name: 'messages',
      description: 'Consult users messages',
    },
  ],
  schemes: ['http'],
  paths: {
    '/bots': {
      get: {
        tags: ['bots'],
        summary: 'Returns all bots by creation orders',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Bots',
              },
            },
          },
        },
      },
      post: {
        tags: ['bots'],
        summary: 'Create new bot',
        description: '',
        operationId: 'createBot',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Bot objects returned',
            required: true,
            schema: {
              $ref: '#/definitions/BotsPost',
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
          },
        },
      },
    },
    '/bots/{botid}': {
      get: {
        tags: ['bots'],
        summary: 'Retrieve an existing bot',
        description: '',
        operationId: 'updateBot',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'botid',
            in: 'path',
            description: 'ID of bot to search',
            required: true,
            type: 'string',
          },
          {
            in: 'body',
            name: 'body',
            description: 'Pet object that needs to be added to the store',
            required: true,
            schema: {
              $ref: '#/definitions/Bots',
            },
          },
        ],
        responses: {
          400: {
            description: 'Invalid ID supplied or not founded',
          },
        },
      },
      put: {
        tags: ['bots'],
        summary: 'Update the entire bot',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'botid',
            type: 'string',
            in: 'path',
            description: 'ID of bot to search',
            required: true,
          },
          {
            in: 'body',
            name: 'body',
            description: 'Bot objects returned',
            required: true,
            schema: {
              $ref: '#/definitions/BotsPost',
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
          },
          400: {
            description: 'operation failed',
          },
        },
      },
      patch: {
        tags: ['bots'],
        summary: 'Modify the specific field in bot',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'botid',
            type: 'string',
            in: 'path',
            description: 'ID of bot to search',
            required: true,
          },
          {
            in: 'body',
            name: 'body',
            description: 'Bot objects returned',
            required: true,
            schema: {
              $ref: '#/definitions/BotsPost',
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
          },
          400: {
            description: 'operation failed',
          },
        },
      },
      delete: {
        tags: ['bots'],
        summary: 'Delete the informed bot',
        description: '',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'botid',
            type: 'string',
            in: 'path',
            description: 'ID of bot to search',
            required: true,
          },
          {
            in: 'body',
            name: 'body',
            description: 'Bot objects returned',
            required: true,
            schema: {
              $ref: '#/definitions/BotsPost',
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
          },
          400: {
            description: 'operation failed',
          },
        },
      },
    },
    '/messages': {
      get: {
        tags: ['messages'],
        summary: 'Returns all users messages',
        description: 'The conversationId correlates the message with user.',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'query',
            in: 'query',
            description: 'query to search by field(s)',
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Messages',
              },
            },
          },
        },
      },
      post: {
        tags: ['messages'],
        summary: 'Create new message',
        description: '',
        operationId: 'createMessage',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Message objects returned',
            required: true,
            schema: {
              $ref: '#/definitions/MessagesPost',
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
          },
        },
      },
    },
    '/messages/{conversationid}': {
      get: {
        tags: ['messages'],
        summary: 'Returns a specific users messages',
        description: 'The conversationId correlates the message with user.',
        operationId: '',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'conversationid',
            type: 'string',
            in: 'path',
            description: 'ID of message conversation to search',
            required: true,
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
          },
          400: {
            description: 'operation failed',
          },
        },
      },
    },
  },
  definitions: {
    Bots: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
      },
    },
    BotsPost: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
      },
    },
    Messages: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        conversationId: {
          type: 'string',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
        from: {
          type: 'string',
        },
        to: {
          type: 'string',
        },
        text: {
          type: 'string',
        },
      },
    },
    MessagesPost: {
      type: 'object',
      properties: {
        conversationId: {
          type: 'string',
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
        from: {
          type: 'string',
        },
        to: {
          type: 'string',
        },
        text: {
          type: 'string',
        },
      },
    },
  },
  externalDocs: {
    description: 'Find out more about Swagger',
    url: 'http://swagger.io',
  },
};
