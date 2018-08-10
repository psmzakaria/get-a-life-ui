import _ from "lodash";
import React from "react";
import { Search, Grid } from "semantic-ui-react";

const SearchUsernameBar = props => {
  return (
    <Grid>
      <Grid.Column>
        <Search
          loading={props.isLoading}
          onResultSelect={props.handleResultSelect}
          onSearchChange={_.debounce(props.handleSearchChange, 500, {
            leading: true
          })}
          results={props.results}
          value={props.value}
          fluid={true}
        />
      </Grid.Column>
    </Grid>
  );
};

export default SearchUsernameBar;
