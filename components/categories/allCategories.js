import { Header, Table, Icon, Button } from 'semantic-ui-react';
import Gravatar from 'react-gravatar';
import formatDate from '../../utils/formatDate';

const AllCategories = ({categories}) => {
    return(
        <>
        <Header as="h2">
            <Icon name="users" />
            Categories ({categories.length})
        </Header>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                  
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {categories.map(item => (
                    <Table.Row>
                       
                        <Table.Cell>{item.categoryName}</Table.Cell>
                        <Table.Cell>{item.status}</Table.Cell>
                        <Table.Cell>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </Table.Cell>
                      </Table.Row>
                ))}
            </Table.Body>
        </Table>
        </>
    );
}

export default AllCategories;