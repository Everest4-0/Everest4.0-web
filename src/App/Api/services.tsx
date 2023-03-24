type methodTypes = "GET" | "POST" | "HEAD" | "OPTIONS" | "PUT" | "DELETE";

export const services: any = {
  news: {},
  auth: {
    singIn: {
      endpoint: "users/authenticate",
      method: "POST",
    },
    signOn: {
      endpoint: "users/signon",
      method: "POST",
    },
  },
  users: {
    list: {
      endpoint: "users/",
      method: "GET",
    },
  },
  evaluationRequests: {
    list: {
      endpoint: "evaluation-requests",
      method: "GET",
    },
  },

  evaluations: {
    list: {
      endpoint: "evaluations",
      method: "GET",
    },
  },
  
  acls: {},
  chats: {},
};
