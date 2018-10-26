import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

    state = {
        username: 'shauryadhadwal',
        paragraphs: [{
                text1: 'Globalisation is bringing the world closer with each passing day. Many individuals are becoming global citizens, moving from one country to the other as part of their work requirements. They are also happy to explore the new opportunities as it is financially very lucrative for them. But this has raised some tax complications for them. As a general principle, taxpayers have to pay taxes in the country where they earn income; this principle is also known as source-based taxation. No country would like any person to take away the income earned in it, without the due taxes being discharged by the individual. On top of it, if he is a resident of the other country, that country may also tax his global income (i.e. the income earned outside the country of residence).',

                text2: 'All this can result in serious double taxation of the same income. In such situations, the Double Tax Avoidance Agreement (DTAA) can come to the rescue of such taxpayer. Currently, India has comprehensive DTAAs with 88 countries, out of which 85 are in force.'
            },
            {
                text1: 'In a recent gloomy study of the American economy, Thomas Piketty, Emmanuel Saez, and Gabriel Zucman find that almost none of the gains from economic growth accrued to the bottom half of the population. They write, “Looking first at income before taxes and transfers, income stagnated for bottom 50% earners: for this group, average pre-tax income was $16,000 in 1980 — expressed in 2014 dollars, using the national income deflator — and still is $16,200 in 2014.”¹ Piketty, Saez, and Zucman also found that incomes of the top 1% tripled over the same time period.',

                text2: 'Most people believe that the middle class and the poor are stagnating, treading water, while the rich get all the goodies. Nobel Laureate Paul Krugman writes that “Wages for ordinary workers have in fact been stagnant since the 1970s.”² Jared Bernstein writes in the New York Times, “for middle-income households earnings have declined in real terms 7 percent from 1979 to 2010.”³'
            },
            {
                text1: 'Partnoy’s philosophy is this: Procrastination is a necessary part of modern life. We all have more tasks waiting for us than we could possibly do at once, so of course we put things off for days, sometimes weeks. The issue, he says, is when we procrastinate badly — when we wait to study for a huge exam until the last few hours, for example, or when we delay an urgent phone call in favor of mindlessly scrolling through Twitter.',

                text2: 'If you’re an inveterate procrastinator, though, just knowing there’s a difference won’t move you into the “good” zone. And then there are some people, like me, who struggle with the opposite problem: We try to take care of everything as soon as we possibly can, leaving us anxious and split-brained. But wherever you fall on the spectrum, there are proven ways to walk the tightrope of do and delay. Your blood pressure, and your work, will hopefully be better for it.'
            }
        ]
    }

    nameChangeHandler = (event) => {
        this.setState({username : event.target.value});
    }

  render() {
    return (
        <div className="App">
            <h1> Assignment #1 </h1>
            <UserInput username={this.state.username} changed={this.nameChangeHandler}></UserInput>
            <UserOutput text={this.state.paragraphs[0]} username={this.state.username}></UserOutput>  
            <UserOutput text={this.state.paragraphs[1]} username={this.state.username}></UserOutput>
            <UserOutput text={this.state.paragraphs[2]} username={this.state.username}></UserOutput>
        </div>
    );
  }
}

export default App;
