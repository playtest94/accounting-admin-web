import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { NextPage } from "next";
import NavBar from "../../components/navbar";
import Auth from "../../layouts/auth";

const Home = () => {
  return (
    <Container gap={0}>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card color="primary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              1 of 2
            </Text>
          </Card>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card color="primary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              1 of 3
            </Text>
          </Card>
        </Col>
        <Col>
          <Card color="primary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              2 of 3
            </Text>
          </Card>
        </Col>
        <Col>
          <Card color="primary">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              3 of 3
            </Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


Home.getLayout = function getLayout(page: NextPage) {
  return (
    <Auth>
      <NavBar />
      {page}
    </Auth>
  )
}
export default Home;