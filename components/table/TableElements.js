import styled from "styled-components";

export const Styles = styled.div`
display: flex;
.table-container {
  margin-right: 8rem;
  @media (max-width: 981px) {
    margin-right: 1rem;
  }
}
.pagination-div {
  display: flex;
  position: relative;
  top: 1rem;

  left: 2rem;
}
.pagination-pages {
  display: block;
  right: 4rem;
  & > span > input {
    width: 2rem;
  }
  & > select {
    width: 6rem;
  }
}

.pagination-buttons {
  height: 1rem;
  display: block;
  left: 8rem;
  bottom: 1rem;
  font-size: 1.2rem;
}
table {
  border-spacing: 0;
  border: 1px solid #c4c4c4;
  margin-left: 2rem;
  margin-top: 2.2rem;
  margin-bottom: 1rem;

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }

  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;

    :last-child {
      border-right: 0;
    }
  }
}
`;