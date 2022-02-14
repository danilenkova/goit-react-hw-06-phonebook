import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import {
  StyledFilter,
  FilterLabel,
  FilterField,
  FilterInput,
} from "./Filter.styled";
import Reset from "../resetbutton";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <StyledFilter>
      <FilterLabel>
        <FilterField>Find contacts by name</FilterField>
        <FilterInput
          type="text"
          name="filter"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          value={filter}
          placeholder="Enter name"
          autoComplete="off"
        />
      </FilterLabel>
      {filter && <Reset onClick={() => dispatch(changeFilter(""))} />}
    </StyledFilter>
  );
};

export default Filter;
