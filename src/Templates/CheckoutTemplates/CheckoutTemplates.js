import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { USER_LOGIN } from "../../util/setting";

const CheckoutTemplate = (props) => {
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }

  // props (path)
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <Fragment>
            <props.component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
export default CheckoutTemplate;
