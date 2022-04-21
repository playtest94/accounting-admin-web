import { NextPage } from "next"
import NavBar from "../../components/navbar"
import Auth from "../../layouts/auth"

const AccountCategories = () => {

  return <div>AccountCategories</div>

}

AccountCategories.getLayout = function getLayout(page: NextPage) {
  return (
    <Auth>
      <NavBar />
      {page}
    </Auth>
  )
}

export default AccountCategories