import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: #ede090;
  color: black;
  font-size: 15px;
  font-weight: bolder;

  &:hover {
    background: #ede090;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: #ede090;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #f1a87d;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}



export default Pagination;