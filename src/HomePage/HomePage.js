import React from "react";
import Chart from "../Chart/Chart";

function HomePage() {
  return (
    <main className="container center">
      <div className="page-area">
        <title>Home - Personal Budget</title>
        <article className="text-box">
          <h1>Budget Chart</h1>
          <p>
            <Chart/>
          </p>
        </article>

        <article className="text-box">
          <h1>Stay on track</h1>
          <p>
            Do you know where you are spending your money? If you take the time
            to track it down, you might be surprised! Proper budget management
            starts with awareness... and this app will help you with that!
          </p>
        </article>

        <article className="text-box">
          <h1>Alerts</h1>
          <p>
            What happens if you are getting close to exceeding your clothing
            budget? You will get an alert! The goal is to never go over your set
            budgets.
          </p>
        </article>

        <article className="text-box">
          <h1>Results</h1>
          <p>
            People who stick to a financial plan and budget every expense get
            out of debt faster! It's a huge weight off your shoulders to be able
            to be able to spend your money without guilt or fear, with this app
            you will know it is all safe and accounted for.
          </p>
        </article>

        <article className="text-box">
          <h1>Free</h1>
          <p>
            This app is free!!! And you will be the only one holding your data!
          </p>
        </article>

        <article className="text-box">
          <h1>Tell us About Yourself</h1>
          <p>
            We will start with a short quiz (don't worry you don't have to study
            beforehand!) to get to know a bit about your situation first so we
            can help you figure out a plan that will work for you!
          </p>
        </article>

        <article className="text-box">
          <h1>Custom Plans for Your Situation</h1>
          <p>
            We will start with a suggestion of the best plan for your finances
            based on the results of the quiz. Don't worry, you'll have the power
            to modify this plan as you see fit, especially over time as your
            situation may improve or when unexpected troubles occur. This app is
            as flexible as you need.
          </p>
        </article>

        <article className="text-box">
          <h1>Rainy Day Fund</h1>
          <p>
            Speaking of unexpected troubles, our app will help encourage you to
            build up a rainy day fund for those situations we could see coming
            but can never really plan for. Whether your car blows a tire or you
            miss a few days of work having to care for a sick child, a rainy day
            fund can keep you from feeling too set back financially. Our app
            offers different ways for you to build your rainy day budget.
          </p>
        </article>

        <article className="text-box">
          <h1>Reduce Impulse Spending</h1>
          <p>
            Using a combination of psychology and data we'll be able to help you
            categorize your funds so that you'll be less likely to end up
            spending your money on that new video game that was just released, a
            new outfit you saw in the store, or that food in the grocery store
            you thought just looked really good because you were hungry.
          </p>
        </article>
      </div>
    </main>
  );
}

export default HomePage;
