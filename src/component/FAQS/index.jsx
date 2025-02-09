import "./FAQs.css";
import { QNA } from "../../utils/FAQ_QNA";
import FAQ_tabs from "./FAQ_tab";
const FAQsQuestions = (props) => {
  /// Here we will add the FAQ section using drop
  return (
    <div className="faq_Area">
      <h2>Frequently Aksed Questions</h2>
      {/* <FAQ_tabs
        question={"What is Nxtflix"}
        answer={"Netflix is an app to watch Online movies and shows"}
      />
      <FAQ_tabs
        question={"What is Samsung"}
        answer={"Netflix is an app to watch Online movies and shows"}
      />
      <FAQ_tabs
        question={"What is Oppo"}
        answer={"Netflix is an app to watch Online movies and shows"}
      />
      <FAQ_tabs
        question={"What is Nxtflix"}
        answer={"Netflix is an app to watch Online movies and shows"}
      />
      <FAQ_tabs
        question={"What is Nxtflix"}
        answer={"Netflix is an app to watch Online movies and shows"}
      />
      <FAQ_tabs
        question={"What is Nxtflix"}
        answer={"Netflix is an app to watch Online movies and shows"}
    //   /> */}
     
      {
        QNA.map((iteam)=>(
            <FAQ_tabs key={iteam.id}
        question={iteam.question}
        answer={iteam.answer}
      />
        ))
      }
    </div>
  );
};
export default FAQsQuestions;
