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

const WrittingMessage = styled.p`
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
            writting: false
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
            this.setState({writting: true});
            setTimeout(() => { 
                let stateCopy = {...this.state};
                stateCopy.questions.push({body: answerBody, type: 'xavier'});    
                this.setState({questions: stateCopy.questions, writting: false});
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

                {this.state.writting ? <WrittingMessage>Xavier is writting...</WrittingMessage> : null}

                <SelectionArea>
                    <H3 body="Ask me something:" />
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Hi, Xavier', 'sender', 'Hey!')
                        }}>Hi, Xavier</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'What did you study?', 'sender', 'Digital Design')
                        }}>What did you study?</SelectMessage>
                    <SelectMessage onClick={(el) => {
                        renderQuestion(el, 'Are you open to new opportunities?', 'sender', 'Maybe...')
                        }}>Are you open to new opportunities?</SelectMessage>
                </SelectionArea>
            </ChatFeatureWrapper>
        )
    }
}

export default ChatFeature;

