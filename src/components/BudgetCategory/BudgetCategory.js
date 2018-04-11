import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import React from 'react';
import PropTypes from 'prop-types';

const BudgetCategory = props => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary>
        <Typography>{props.name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

BudgetCategory.propTypes = {
  name: PropTypes.string.isRequired,
  lineItems: PropTypes.arrayOf(
    PropTypes.shape({
      amountBudgeted: PropTypes.number.isRequired,
      amountSpent: PropTypes.number
    })
  )
};

export default BudgetCategory;
