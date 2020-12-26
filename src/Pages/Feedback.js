import React, { Component } from 'react'
import SubAppBar from '../Components/SubAppBar'
import emailjs from 'emailjs-com';
//import axios from 'axios';
//import { db } from '../firebase'

export class Feedback extends Component {

    state = {
        sent: null,
        temp: []
    }

    sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_9ig1ny9', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
                if (result.text === "OK") {
                    this.setState({ sent: true })
                }
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return (
            <div>
                <SubAppBar />
                <div style={{ padding: "0px 20px" }} className="w3-animate-bottom"  >
                    <h2>
                        Feedback
                    </h2>
                    <p>
                        Please let us know where are we behind. < br /><br />
                        Please mention if you want more content - series, movies, anime, podcasts etc.
                        Or any features you would like.
                        We are trying to get every OTP on our app possible and them available to you.
                    </p>
                    <form onSubmit={this.sendMail} >
                        <div>
                            <label>Message</label>
                        </div>
                        <div>
                            <textarea name="message" required placeholder="Type your feedback here.." />
                        </div>
                        <div>
                            <input type="submit" style={{ backgroundColor: "white", color: "black" }} value="Send" />
                        </div>
                    </form>
                    {
                        this.state.sent ? (
                            <div>
                                Message sent! Thank You for caontacting us. We reply as soon as possible.
                            </div>
                        ) : (
                                <div></div>
                            )
                    }
                </div>
            </div>
        )
    }
}

export default Feedback


function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i === 0)
          costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0)
        costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }