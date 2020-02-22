import React, { Component } from 'react'
import styled from 'styled-components'
import H3 from '../../Library/Style/H3'

const MessageXavierWrapper = styled.div`
    text-align: left;
`;

const MessageXavier = styled.div`
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    background-color: #eee;
    max-width: 300px;
`;

const MessageSenderWrapper = styled.div`
    text-align: right;
`;

const ChatFeatureWrapper = styled.div`
`;

const MessageSender = styled.div`
    border-radius: 20px;
    padding: 8px 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: inline-block;
    background-color: #037ffc;
    color: white;
    max-width: 300px;
`;

const SelectionArea = styled.div`
    margin: 40px 0;   

    p {
        margin: 20px 0; 
    } 
`;

const SelectMessage = styled.div`
    border: 1px solid #037ffc;
    border-radius: 20px;
    padding: 8px 15px;
    margin: 5px 0;
    margin-right: 10px;
    display: inline-block;
    background-color: white;
    color: #037ffc;
    cursor: pointer;

    &:hover {
        background-color: #037ffc;
         color: white;
    }
`;

const OtherSelectMessage = styled.div`
    border: 1px solid #037ffc;
    border-radius: 20px;
    padding: 8px 15px;
    margin: 5px 0;
    margin-right: 10px;
    display: inline-block;
    background-color: white;
    color: #037ffc;
    cursor: pointer;

    &:hover {
        background-color: #037ffc;
         color: white;
    }
`;

const WritingMessage = styled.p`
    color: #037ffc;
    font-size: 13px;
`;

class ChatFeature extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {body: 'Hi! Ask me something!', type: 'xavier'},
            ],
            writing: false
        }
    }
    render() {

        const renderQuestion = (el, questionBody, questionType, answerBody) => {
            let stateCopy = {...this.state};
            stateCopy.questions.push({body: questionBody, type: questionType});
            this.setState({questions: stateCopy.questions});
            renderAnswer(answerBody);
        }

        const renderAnswer = (answerBody) => {
            this.setState({writing: true});
            setTimeout(() => { 
                let stateCopy = {...this.state};
                stateCopy.questions.push({body: answerBody, type: 'xavier'});    
                this.setState({questions: stateCopy.questions, writing: false});
            }, 1000);
        }

        return (
            <ChatFeatureWrapper>
                {this.state.questions.map((question, index) => {
                    if (question.type == 'xavier') {
                        return (
                            <MessageXavierWrapper key={index}>
                                <MessageXavier>
                                    {question.body}
                                </MessageXavier>
                            </MessageXavierWrapper>
                        )
                    } else if (question.type == 'sender') {
                        return (
                            <MessageSenderWrapper key={index}>
                                <MessageSender>
                                    {question.body}
                                </MessageSender>
                            </MessageSenderWrapper>
                        )                 
                    }
                })}

                {this.state.writing ? <WritingMessage>Xavier is writing...</WritingMessage> : null}

                <SelectionArea>
                    <H3 body="Ask me something:" />
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Hi, Xavier', 'sender', 'Hey!')
                        }}>Hi, Xavier</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Front End or UI Design?', 'sender', 'Although I started my career as a UI Designer, I have transitioned to Front-End Development and made it my strongest skill. I will always want to keep my UI Design skillset, though. ')
                        }}>Front End or UI Design?</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Are you open to new opportunities?', 'sender', "I'm actively looking for part opportunities and side projects at the moment!")
                        }}>Are you open to new opportunities?</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Are you a University student?', 'sender', "Yes. I'm currently in my second year of a Bachelor's degree in Digital Design at Brunel University London")
                        }}>Are you a University student?</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Coding experience?', 'sender', "I've been coding since September 2018, so I would still consider myself a Junior developer. I also worked at karmoon.co.uk as a Front End Developer Junior until January 2020.")
                        }}>Coding experience?</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Where are you from?', 'sender', "I was born in Barcelona, Spain. However, I moved to London in 2018 and found a new place to call home. Though I'd like to travel in a near future, my end goal is to stay in the United Kingdom.")
                        }}>Where are you from?</SelectMessage>
                    <a href="mailto:hi.xavier.mod@gmail.com"><OtherSelectMessage>Other question</OtherSelectMessage></a>
                </SelectionArea>
            </ChatFeatureWrapper>
        )
    }
}

export default ChatFeature;

