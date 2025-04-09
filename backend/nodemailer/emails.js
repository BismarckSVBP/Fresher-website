// import {
// 	PASSWORD_RESET_REQUEST_TEMPLATE,
// 	PASSWORD_RESET_SUCCESS_TEMPLATE,
// 	VERIFICATION_EMAIL_TEMPLATE,
// } from "./emailTemplates.js";
// import { mailtrapClient, sender } from "./mailtrap.config.js";

// export const sendVerificationEmail = async (email, verificationToken) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Verify your email",
// 			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
// 			category: "Email Verification",
// 		});

// 		console.log("Email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending verification`, error);

// 		throw new Error(`Error sending verification email: ${error}`);
// 	}
// };

// export const sendWelcomeEmail = async (email, name) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
// 			template_variables: {
// 				company_info_name: "Auth Company",
// 				name: name,
// 			},
// 		});

// 		console.log("Welcome email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending welcome email`, error);

// 		throw new Error(`Error sending welcome email: ${error}`);
// 	}
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Reset your password",
// 			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
// 			category: "Password Reset",
// 		});
// 	} catch (error) {
// 		console.error(`Error sending password reset email`, error);

// 		throw new Error(`Error sending password reset email: ${error}`);
// 	}
// };

// export const sendResetSuccessEmail = async (email) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Password Reset Successful",
// 			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
// 			category: "Password Reset",
// 		});

// 		console.log("Password reset email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending password reset success email`, error);

// 		throw new Error(`Error sending password reset success email: ${error}`);
// 	}
// };

import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  CONTACT_US_EMAIL_TEMPLATE,
  CONTACT_US_EMAIL_TEMPLATE_COPY_TO_USER,
} from "./emailTemplates.js";

import { transporter, sender, adminEmail } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "User created Successful",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
      category: "User created",
    });

    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);

    throw new Error(`Error sending password reset success email: ${error}`);
  }
};

//   export const contactUsEmail = async (email, name, query) => {
// 	try {
// 	  const htmlContent = CONTACT_US_EMAIL_TEMPLATE
// 		.replace("{userName}", name)
// 		.replace("{userEmail}", email)
// 		.replace("{userMessage}", query);

// 	  const response = await transporter.sendMail({
// 		from: email,              // Who sent it
// 		to: sender,               // Admin or whoever should receive it
// 		subject: `Query Mail by ${name}`,
// 		html: htmlContent,
// 		category: "Contact by user",  // (Optional) Not used by default in nodemailer
// 	  });

// 	  console.log("Query sent successfully", response);
// 	} catch (error) {
// 	  console.error(`Error sending query`, error);
// 	  throw new Error(`Error sending query: ${error}`);
// 	}
//   };

export const contactUsEmail = async (email, name, query) => {
  try {
    const response = await transporter.sendMail({
      from: email, // Who sent it
      to: adminEmail,
      subject: `Query Mail by ${name}`,
      html: CONTACT_US_EMAIL_TEMPLATE.replace("{userName}", name)
        .replace("{userEmail}", email)
        .replace("{userMessage}", query),

      category: "Contact by user",
    });

    console.log("Query sent successfully", response);
  } catch (error) {
    console.error(`Error sending query`, error);
    throw new Error(`Error sending query: ${error}`);
  }
};

export const sendCopyOfContactUsEmailToUser = async (email, name, query) => {
  try {
    const response = await transporter.sendMail({
      from: sender, // Who sent it
      to: email,
      subject: `Query Mail by ${name} (Copy)`,
      html: CONTACT_US_EMAIL_TEMPLATE_COPY_TO_USER.replaceAll("{userName}", name)
        .replace("{userEmail}", email)
        .replace("{userMessage}", query),
      category: "Contact by user Copy to user",
    });

    console.log("Query sent successfully", response);
  } catch (error) {
    console.error(`Error sending query`, error);
    throw new Error(`Error sending query: ${error}`);
  }
};
