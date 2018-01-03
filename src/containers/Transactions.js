import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Constants from '../utils/constants';
import TransactionForm from '../components/TransactionForm';
import {connect} from 'react-redux';
import {startAddTransaction} from '../actions/transactions';
import TransactionList from '../components/TransactionList';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: 'none'
    },
    root: {
        flexGrow: 1,
        marginTop: 30,
        marginRight: 30,
        marginLeft: 30,
        textAlign: 'center',
    },
    paper: {
        color: theme.palette.text.secondary,
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto'
    }
});

class AddTransactionContainer extends React.Component {

    onSubmit = (transaction) => {
        this
            .props
            .startAddTransaction(transaction);
        this
            .props
            .history
            .push('/transactions');
    };

    render() {
        const {classes} = this.props;
        return (
            <div>

                <div className={classes.root}>
                    <h1>{Constants.ADD_TRANSACTION_PAGE_TITLE}</h1>
                    <Grid container spacing={8}>

                        <Grid item md={4} xs={10} sm={11}>
                            <Paper className={classes.paper}>
                                <TransactionForm onSubmit={this.onSubmit}/>
                            </Paper>
                        </Grid>
                        <Grid item md={8} xs={10} sm={11}>
                        <Paper className={classes.paper}>
                            <TransactionList />
                        </Paper>
                    </Grid>

                    </Grid>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddTransaction: (transaction) => dispatch(startAddTransaction(transaction))
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(AddTransactionContainer));
