import React, { Component } from "react";
import PropTypes from "prop-types";

import CategoryButton from "./Skills/CategoryButton";
import SkillBar from "./Skills/SkillBar";

class Skills extends Component {
  static initializeButtons(categories) {
    return categories.reduce(
      (acc, category) => {
        acc[category.name] = false;
        return acc;
      },
      { All: true },
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      buttons: this.initializeButtons(props.categories),
      skills: props.skills,
    };
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      const buttons = Object.keys(prevState.buttons).reduce((acc, key) => {
        acc[key] = label === key ? !prevState.buttons[key] : false;
        return acc;
      }, {});

      // Ensure "All" is active if no other button is active
      buttons.All = !Object.values(buttons).some((active) => active);

      return { buttons };
    });
  };

  getRows() {
    const { categories } = this.props;
    const { buttons, skills } = this.state;

    // Find the active category
    const activeCategory =
      Object.keys(buttons).find((key) => buttons[key]) || "All";

    return skills
      .filter(
        (skill) =>
          activeCategory === "All" || skill.category.includes(activeCategory),
      )
      .sort((a, b) => {
        if (a.competency !== b.competency) return b.competency - a.competency;
        if (a.category[0] !== b.category[0])
          return a.category[0].localeCompare(b.category[0]);
        return a.title.localeCompare(b.title);
      })
      .map((skill) => (
        <SkillBar categories={categories} data={skill} key={skill.title} />
      ));
  }

  getButtons() {
    const { buttons } = this.state;
    return Object.keys(buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={buttons[key]}
        handleClick={this.handleChildClick}
      />
    ));
  }

  render() {
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>Skills</h3>
          <p>
            Note: I think these sections are silly, but everyone seems to have
            one. Here is a<em> mostly</em> honest overview of my skills.
          </p>
        </div>
        <div className="skill-button-container">{this.getButtons()}</div>
        <div className="skill-row-container">{this.getRows()}</div>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      competency: PropTypes.number.isRequired,
      category: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string,
    }),
  ).isRequired,
};

export default Skills;
