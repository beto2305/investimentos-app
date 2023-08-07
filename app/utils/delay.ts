/**
 *
 * Force a delay inside an async function
 *
 * Example
 * async () => {
 *   try {
 *       await delay(500);
 *       // do something
 *   } catch (error) {
 *      // throw error
 *   }
 * }
 *
 * @param time
 * @returns
 */

export const delay = (time = 0) =>
  new Promise<number>((res) => setTimeout(() => res(time), time));

export default delay;

/**
 *
 * Return a friendly error message based on Firebase error code. (see more https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth)
 *
 * @param firebaseErrorCode Firebase Error Codes
 * @returns Friendly error message
 */
export const firebaseErrorMessage = (firebaseErrorCode) => {
  switch (firebaseErrorCode) {
    case "auth/email-already-exists":
      return "Already exists an account with the given email address.";
    case "auth/invalid-email":
      return "The informed value is not a valid email address.";
    case "auth/operation-not-allowed":
      return "Operation is not allowed.";
    case "auth/user-not-found":
      return "There is no user corresponding to the email address.";
    case "auth/wrong-password":
      return "The password is invalid for the given email, or if the account corresponding to the email does not have a password set.";
    default:
      return "Something went wrong during process execution.";
  }
};
