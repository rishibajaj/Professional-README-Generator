// function to generate badge
function generateBadge(badge) {
  const license = badge;

  switch (license) {
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    default:
      return '';
  };
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${generateBadge(data.license)}

  ## Description

  ${data.description}

  Here is a link to the deployed application:
  ${data.appLink}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ![${data.altText}](${data.screenshot})

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For further information:
  
  * Visit: ${data.github}
  * Contact: ${data.email}
`;
}

module.exports = generateMarkdown;
