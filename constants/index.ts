import { CreateAssistantDTO, CreateWorkflowDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateWorkflowDTO = 
{
  "name": "ai_interview_prep",
  "nodes": [
    {
      "name": "introduction",
      "type": "conversation",
      "isStart": true,
      "metadata": {
        "position": {
          "x": -657.8897692862682,
          "y": -106.29865816865248
        }
      },
      "prompt": "You are a friendly AI interview preparation assistant. Greet the user by name and ask for their interview requirements like {{role}}, interview {{type}} (technical/behavioral/mixed), experience{{level}}, {{techstack}}, and number of questions {{amount}}. Collect this information conversationally, then confirm all details before proceeding. Keep the conversation natural and encouraging. Greet the user. Inform them that you will get some information from them to create a perfect interview. Ask the caller for the data required to extract. Ask the questions one by one, and await an answer. However, if they say they're busy, not interested, or want to call back later, be understanding and polite. Acknowledge their preference and end the conversation naturally. Don't force the interview prep process on unwilling users.",
      "globalNodePlan": {
        "enabled": true,
        "enterCondition": ""
      },
      "variableExtractionPlan": {
        "output": []
      },
      "messagePlan": {
        "firstMessage": "Hello {{username}}! Let's prepare your interview. I'll ask you a few questions and generate a perfect interview just for you. Are you ready? "
      },
      "toolIds": [
        "823748c8-2147-4e72-9422-4dc30996d758"
      ]
    },
    {
      "name": "apiRequest_1756363549561",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -669.6653137801169,
          "y": 911.6478619994798
        }
      },
      "tool": {
        "url": "https://ai-interview-prep-two-red.vercel.app/api/vapi/generate",
        "body": {
          "type": "object",
          "required": [],
          "properties": {
            "role": {
              "type": "string",
              "default": "{{role}}",
              "description": ""
            },
            "type": {
              "type": "string",
              "default": "{{type}}",
              "description": ""
            },
            "level": {
              "type": "string",
              "default": "{{level}}",
              "description": ""
            },
            "amount": {
              "type": "string",
              "default": "{{amount}}",
              "description": ""
            },
            "userid": {
              "type": "string",
              "default": "{{userid}}",
              "description": ""
            },
            "techstack": {
              "type": "string",
              "default": "{{techstack}}",
              "description": ""
            }
          }
        },
        "type": "apiRequest",
        "method": "POST",
        "function": {
          "name": "api_request_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          },
          "description": "API request tool"
        },
        "messages": [
          {
            "type": "request-start",
            "content": "Great news! Your interview questions are currently being prepared. Please hold on for a moment—I appreciate your patience and can't wait for you to see the questions soon!",
            "blocking": true
          },
          {
            "role": "assistant",
            "type": "request-complete",
            "content": "The request has been sent, and the interview has been generated. Thank you for your call. Bye!",
            "endCallAfterSpokenEnabled": true
          },
          {
            "type": "request-failed",
            "content": "Oops, looks like something went wrong when sending the data to the app. Please try again",
            "endCallAfterSpokenEnabled": true
          }
        ],
        "variableExtractionPlan": {
          "schema": {
            "type": "object",
            "required": [],
            "properties": {}
          },
          "aliases": []
        }
      }
    },
    {
      "name": "hangup_1756441452140",
      "type": "tool",
      "metadata": {
        "position": {
          "x": -669.2807296621218,
          "y": 1315.6230956070249
        }
      },
      "tool": {
        "type": "endCall",
        "function": {
          "name": "untitled_tool",
          "parameters": {
            "type": "object",
            "required": [],
            "properties": {}
          }
        },
        "messages": [
          {
            "type": "request-start",
            "content": "Everything has been generated. I will redirect you to the dashboard now. Thanks for the call!",
            "blocking": true
          }
        ]
      }
    }
  ],
  "edges": [
    {
      "from": "introduction",
      "to": "apiRequest_1756363549561"
    },
    {
      "from": "apiRequest_1756363549561",
      "to": "hangup_1756441452140"
    }
  ],
  "globalPrompt": ""
}

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];
