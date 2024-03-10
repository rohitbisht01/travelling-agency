import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FrequentlyAskedQuestions = [
  {
    ques: "What are some popular tourist destinations in the area?",
    ans: "Some popular tourist destinations in the area include [list destinations].",
  },
  {
    ques: "How can I book accommodations through this app?",
    ans: "You can book accommodations through our app by navigating to the 'Accommodations' section and selecting your desired dates and preferences.",
  },
  {
    ques: "Are there any guided tours available?",
    ans: "Yes, we offer various guided tours which you can book through our app. These tours cover [list tour types].",
  },
  {
    ques: "What outdoor activities are available in the area?",
    ans: "There are numerous outdoor activities available, such as hiking, biking, kayaking, and more. Our app provides information on available activities and rentals.",
  },
  {
    ques: "How can I find information about local events and festivals?",
    ans: "You can find information about local events and festivals by navigating to the 'Events' section of our app. We regularly update it with upcoming events and festivals in the area.",
  },
];

const QuestionsAsked = () => {
  return (
    <div>
      {FrequentlyAskedQuestions.map((ques, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {ques.ques}
            </AccordionSummary>
            <AccordionDetails>{ques.ans}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default QuestionsAsked;
