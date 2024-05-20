import React, { useState } from 'react';

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleFAQ = (index) => {
    if (selectedQuestion === index) {
      return setSelectedQuestion(null);
    }
    setSelectedQuestion(index);
  };

  const faqs = [
    {
      question: "What is a Licensed user and what is a Participant?",
      answer: "A licensed user has either a free or paid meeting license and can schedule meetings with participants based on the capacity their plan allows. A Participant is an invitee in a meeting scheduled by someone with a meeting license. A Participant does not require a Zoom account nor license in order to join a meeting and can join for free. Participants can join a meeting from their phone, desktop, mobile and tablet devices."
    },
    {
      question: "How many participants can join the meeting?",
      answer: "All plans allow up to 100 participants by default in each meeting (up to 1,000 with Large Meeting add-on)."
    },
    {
        question: "How many people can use one Zoom Meetings license?",
        answer: "A licensed user can host an unlimited number of meetings. However if multiple users have the need to schedule separate meetings, you will need additional meeting licenses per each user."
      },{
        question: "What is the difference between the Zoom Basic and Zoom Pro plans?",
        answer: "With a Basic Plan, you can use a wide range of Zoom products for free and stay connected for up to 40 minutes per meeting. With a Pro plan, you'll receive free premium Essential Apps for 1 year (terms apply) and more advanced features for as long as 30 hours per meeting. See the full plan comparison before you decide which plan works for you."
      },{
        question: "What is the difference between Zoom Rooms and Zoom Meetings?",
        answer: "Zoom Meetings (mobile and desktop client): This is what users use day to day to join meetings from their personal or work computer or mobile device. Zoom Meeting is a desktop application and smartphone app designed for a user account on user-assigned devices (such as your mobile device, tablet, or desktop). The device that the Zoom Meeting app lives on is not designed to be a shared resource, it's tied to an individual. Zoom Meetings resides along with a user’s other applications (e.g. email, calendar, photos, etc on their device). So with Zoom Meetings, it's really the user's Zoom environment and profile. For example, Zoom Meeting will include the user's chat groups, 1:1 chat messages, starred contacts list, Zoom Phone number, call history, and other user-level settings and information.A part of Zoom Meetings is Zoom for Home. Zoom for Home allows any Zoom user to deploy a personal collaboration device for video conferencing, phone calls, interactive whiteboarding, and annotation. Unlike a mobile device, tablet, or laptop which runs the Zoom application (one of many applications), Zoom for Home works on a dedicated personal device that only runs the Zoom software. Zoom Rooms: Zoom Rooms is designed to run on hardware and appliances as a dedicated meeting environment for shared spaces (such as conference rooms), and ideal for group collaboration. Zoom Rooms is a dedicated, shared environment for communications and collaboration with a single consistent interface. This means that users know it will always work the same way regardless of which room they walk into, minimizing user error (very important when you think about meeting rooms that are shared among many different employees and their varying technical levels). Users can schedule the room using room booking tools and join their meetings with one tap. Taking Zoom Rooms outside the traditional conference room, Zoom Rooms can be deployed into open spaces as video-enabled interactive whiteboards, and even provide value add services such as digital signage, for corporate communications and branding, and room schedulers, for room booking management.Zoom Rooms are IT-managed resources that are designed to be the only application up and running on a system. It’s also tied to a calendar resource that’s bookable by others. Zoom Rooms can leverage a variety of display, compute, audio, camera, capture, room control and touch display controller devices to join and manage meetings with integrated HD audio and video. This means that Zoom Rooms audio and video experiences can be easily deployed for phone booths, focus rooms, and huddle rooms, and customized for large boardrooms, broadcast studios, and custom training rooms.All in all, Zoom Meetings (mobile and desktop client) and Zoom Rooms work together to greater emphasize that they are both a part of one interconnected platform, Zoom."
      },{
        question: "What is the difference between an Audio Plan and Zoom Phone?",
        answer: "Zoom Phone is a cloud phone solution that provides integrated PBX features. Zoom Meeting audio plans enable PSTN dial-in/out access to meetings only.  "
      },{
        question: "What payment methods do you accept?",
        answer: "Zoom accepts credit card, PayPal, and other mobile wallet and bank payment methods which may vary based on eligibility (ie. browser or country). For more information, please visit our support article.."
      },{
        question: "Can I pay quarterly or for more than a year up-front?",
        answer: "In most cases, Zoom allows for additional billing cadences such as quarterly. Zoom offers pre-paid packages in 1, 2, and 3-year increments. Please Contact Sales for pricing."
      },{
        question: "Do you charge sales or consumption taxes?",
        answer: "Certain US states and international countries are subject to a required sales or consumption tax. If your online order includes sales tax, VAT, GST, or comparable consumption taxes, you will see the tax amount applied in your shopping cart after the billing step and before checkout is complete"
      },{
        question: "How does the subscription service work? Can I cancel my subscription?",
        answer: "Zoom is a subscription-based service, which means that your plan renews every month or year (depending on the term you choose). You can cancel your subscription at any time during your plan term to cancel the auto-renewal of your subscription."
      },{
        question: "Where can I find a Zoom W-9 for my business?",
        answer: "If your business requires service providers to have a W-9 form on file for tax records, you can find a copy of Zoom's W-9 here."
      },{
        question: "Where can I find Zoom's Terms of Service?",
        answer: "Zoom's Terms of Service can be found in our trust center."
      },{
        question: "How does Zoom keep the product secure?",
        answer: "Securing your Zoom Meetings can start before your event even begins, with a robust set of pre-meeting features, including Waiting Rooms, Join by Domain, and Passcodes. Zoom also has controls at your fingertips to ensure your meetings are secure and disruption-free. Zoom takes care to ensure your data is secure at all times using learn more about our privacy and security features in our trust center."
      },{
        question: "How does Zoom support non-profits?",
        answer: "For US Customers: If your non-profit organization is eligible for a sales tax exemption, follow the support guide to submit your exemption certificate. Some certificates may need manual review and result in initial tax charges, but once approved, any applicable taxes paid will be refunded to your original payment method.Global Non-profit Discount: Zoom collaborates with TechSoup to offer verified non-profit organizations worldwide a special discount. For further details and to claim this offer. Please visit their website."
      }
    // Add more FAQs as needed
  ];

  return (
    <div className="max-w-[1200px] mx-auto pt-[80px] mb-[100px]">
      <h1 className="text-[45px] font-[500] text-center mb-6 text-[#00053d]">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-[20px] font-[500] text-[#00053d] font-semibold">{faq.question}</h3>
            <span className={`transform transition-transform duration-300 ${selectedQuestion === index ? 'rotate-90' : ''}`}>
              &#9654;
            </span>
          </div>
          <div className={`overflow-hidden transition-max-height duration-300 ${selectedQuestion === index ? 'max-h-40' : 'max-h-0'}`}>
            <p className="p-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
