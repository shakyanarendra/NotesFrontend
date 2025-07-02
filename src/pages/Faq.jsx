import React from "react";

const Faq = () => {
  const faqs = [
  {
    question: "What is this Notes App?",
    answer:
      "Our Notes App is a user-friendly platform designed to help students and professionals organize, upload, and access notes anytime, anywhere."
  },
  {
    question: "How do I start using the Notes App?",
    answer:
      "Simply sign up for a free account. Once registered, you can upload your own notes, browse notes uploaded by others, and manage your profile."
  },
  {
    question: "Can anyone access the notes, or are they private?",
    answer:
      "Notes uploaded on the platform are accessible to all users. This ensures that students and professionals can benefit from shared resources, regardless of who uploaded them."
  },
  {
    question: "Is there a search feature to quickly find notes?",
    answer:
      "Yes, our powerful search bar allows you to easily find notes by entering keywords, subjects, or topics."
  },
  {
    question: "What kind of documents can I upload?",
    answer:
      "You can upload a variety of formats such as PDF, Word, and presentation files. The platform is built to support common document types used for study and work."
  },
  {
    question: "What information is available in the Profile section?",
    answer:
      "In the Profile section, you can view your personal details, see how many notes you've uploaded, and manage your uploaded documents."
  },
  {
    question: "Is this Notes App free to use?",
    answer:
      "Yes, the Notes App is completely free for all users. We aim to make educational resources accessible to everyone."
  },
  {
    question: "Are my documents safe on the platform?",
    answer:
      "We prioritize the security and privacy of your documents. Uploaded files are stored securely, and your personal data is protected."
  },
  {
    question: "Can I use this Notes App for both personal and professional purposes?",
    answer:
      "Absolutely! Whether you're a student, educator, or working professional, the Notes App helps you organize your ideas and share resources effectively."
  }
];

  return (
    <div className="grid place-content-center lg:h-heightWithoutNavbar">
      <div className="mx-auto max-w-[1550px] bg-white px-5 py-8">
        <h1 className="mb-6 text-3xl">Frequently Asked Questions</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {faqs.map((item, i) => (
            <div key={i} className="">
              <h1 className="text-red mb-2 text-lg font-medium sm:text-xl">
                {item.question}
              </h1>
              <p className="border-b pb-2 text-sm sm:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
