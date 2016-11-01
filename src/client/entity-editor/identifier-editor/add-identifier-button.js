/*
 * Copyright (C) 2016  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import {Button} from 'react-bootstrap';
import React from 'react';
import {addIdentifier} from '../actions';
import {connect} from 'react-redux';

function AddIdentifierButton({
	onClick
}) {
	return (
		<Button bsStyle="success" onClick={onClick}>
			Add identifier
		</Button>
	);
}
AddIdentifierButton.displayName = 'AddIdentifierButton';
AddIdentifierButton.propTypes = {
	onClick: React.PropTypes.func
};

function mapDispatchToProps(dispatch) {
	return {
		onClick: () => dispatch(addIdentifier())
	};
}

export default connect(null, mapDispatchToProps)(AddIdentifierButton);