Export other less files here
@ant-card-color : #00CAB7;
@card-text-color: white;
@button-color: #FF5C00;

#ant-card-course { 
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    background-color: @ant-card-color;
    text-align: center;
    height: 40vh;
    color: @card-text-color;
    font-weight: bold ;
    border-radius: 7%;

    h2 {
        font-size: 1.75rem;
        color: @card-text-color;
    }
    
    #course-content {
        color: @card-text-color;
        margin: 10% 0;
        font-weight: bold ;
    }

    #manage-courses-button {
        border-radius: .25rem;
        width: 100%;
        background-color: @button-color;
        padding: 4% 0;
        margin-top: 20%;
        border: none;
        font-weight: bold ;
    } 
}
  