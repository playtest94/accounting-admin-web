import { Container, Spacer, Row, Col, Card, Text } from "@nextui-org/react"
import { NextPage } from "next"
import NavBar from "../../components/navbar"
import Auth from "../../layouts/auth"
import AccountTable from "./components/account-table"

const Accounts = () => {

  return <Container gap={0}>
    <Spacer y={1} />
    <Row gap={1}>
      <Col>
        <Row gap={1}>
          <Col >
            <Card >
              <Text h6 size={15} color="red" css={{ m: 0 }}>
                1 of 2
              </Text>
            </Card>
          </Col>
        </Row>
        <Spacer y={1} />
        <Row gap={1}>
          <Col>
            <AccountTable />
          </Col>
        </Row>
      </Col>
      <Col span={5}>
        <Card >
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            1 of 2
          </Text>
        </Card>
        <Card >
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            1 of 2
          </Text>
        </Card>
        <Card >
          <Text h6 size={15} color="white" css={{ m: 0 }}>
            1 of 2
          </Text>
        </Card>
      </Col>
    </Row>


  </Container>

}

Accounts.getLayout = function getLayout(page: NextPage) {
  return (
    <Auth>
      <NavBar />
      {page}
    </Auth>
  )
}

export default Accounts