import { initFirebase, initAnalytics, sendMessage } from "@/services/firebase";
import { Message } from '../../types.d';
import {describe, expect, test} from '@jest/globals';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const message: Message = {
  message: "",
  sendDateTime: "1900-02-02T00:00:00"
};

describe("Firebase functions", () => {
  describe("initFirebase", () => {
    test("should initialize Firebase app", () => {
      const app = initFirebase(firebaseConfig);
      expect(app).toBeDefined();
    });
  });
});





