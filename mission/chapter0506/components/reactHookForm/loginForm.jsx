import {
    Container,
    Form
} from "./styled/styled"

export default function ReactHookForm({children,handleSubmit}){
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                {children}
            </Form>
        </Container>
    )
}

