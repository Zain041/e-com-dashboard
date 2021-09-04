import axios from 'axios';
import AllCategories from "../../components/categories/allCategories";
import AdminSidebar from '../../components/_App/AdminSidebar';
import baseUrl from '../../utils/baseUrl';

const Categories = ({ categories, user }) => {
    // console.log(customers)
    return (
        <AdminSidebar user={user}>
            <div className="create-new-products-area">
                <AllCategories categories={categories} />
            </div>
        </AdminSidebar>
    );
}

Categories.getInitialProps = async () => {
    const url = `${baseUrl}/api/category`;
    const response = await axios.get(url);

    return response.data
}
  
export default Categories;