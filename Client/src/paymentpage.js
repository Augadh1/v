import React from "react";
import {
  Button,
  Grid,
  Segment,
  Label,
} from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";

function Payment({ db, pay, statevar }) {
  return (
    <Grid centered stackable>
      <Grid.Column width={6}>
        <Segment>
          <Label>Order details</Label>

          <Segment>
            <div>
              <label>Order Date &emsp; : &emsp;</label>
              {db.orderItem.date}
            </div>
            <br />
            <br />
            <label>Item Details &emsp;&nbsp;&nbsp;&nbsp; : &emsp;</label>
            <div>
              <label>Item Name &emsp;&nbsp;&nbsp;&nbsp;&nbsp; : &emsp;</label>
              {db.orderItem.item.name}
            </div>
            <div>
              <label>Item Quantity &emsp; : &emsp;</label>
              {db.orderItem.item.quantity}
            </div>
            <div>
              <label>Per item price &emsp; : &emsp;</label>
              {db.orderItem.item.price}
            </div>
            <br />
            <br />
            <div style={{ fontSize: 24 }}>
              <label>Total price &emsp; : &emsp;</label>
              {db.orderItem.totalprice}
            </div>
            <br />
            <br />
            <Button
              primary
              fluid
              loading={db.payment}
              disabled={db.payment}
              onClick={() => pay()}
            >
              Pay
            </Button>
            <br />
            <Link to="/user/dashboard">
              <Button fluid>Cancel</Button>
            </Link>
          </Segment>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default withRouter(Payment);
