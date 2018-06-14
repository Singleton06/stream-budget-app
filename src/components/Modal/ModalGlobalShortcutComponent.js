import React from 'react';
import PropTypes from 'prop-types';

import AddBudgetCategoryModal from './AddBudgetCategoryModal';

class ModalGlobalShortcutComponent extends React.Component {
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDownEvent);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDownEvent);
  }

  handleKeyDownEvent = event => {
    if (event.altKey && event.key === 'a') {
      this.props.consumer.showModal(AddBudgetCategoryModal);
    }
  };

  render() {
    return null;
  }
}

ModalGlobalShortcutComponent.propTypes = {
  consumer: PropTypes.shape({
    showModal: PropTypes.func
  })
};

export default ModalGlobalShortcutComponent;
