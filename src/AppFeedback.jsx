// import React, { Component } from 'react';
// import Section from "components/Feedback/Section";
// import FeedbackOptions from "components/Feedback/FeedbackOptions";
// import Statistics from "components/Feedback/Statistics";
// // import Notification from "components/Notification";
// import Notification from 'components/Feedback/Notification/Notification ';
// import Box from 'components/Box';

// class AppFeedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = (e) => {
//     const option = e.target.dataset.label;
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, el) => acc + el, 0);
//   };

//   countPositiveFeedbackPercentage = () =>
//     `${Math.round(
//       (this.state.good / this.countTotalFeedback()) * 100
//     )}%`;

//   render() {
//     const { handleLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
//     const { good, neutral, bad } = this.state;
//     return (
//       <Box
//         p={5}
//         bg="backgroundPrimary"
//       >
//         <Section title="Please leave feedback💹">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback = {handleLeaveFeedback}
//           />
//         </Section>
//         <Section title="📊Statistics📈">
//           {countTotalFeedback()
//             ? <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback()}
//               positivePercentage={countPositiveFeedbackPercentage()}/>
//             : <Notification message="There is no feedback" />
//           }
//         </Section>
//       </Box>
//     )
//   };
// };

// export default AppFeedback;


