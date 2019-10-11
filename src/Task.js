import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
    border: 1px solid lightblue;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props =>(props.isDragging ? 'lightgreen': 'white')};
`;

class Task extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot) => (
                    <Container 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps} 
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Container>
            )}
            </Draggable>
        );
    }
}

export default Task;

//NOTE: 
// tutorial states use:innerRef={provided.innerRef}
// styled-components updated v3 ton v4, so cann't use innerRef
// must use: ref={provided.innerRef}