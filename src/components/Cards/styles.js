import styled from "styled-components";

export const CardsStyle = styled.div`

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border-radius: 10px;

    .img-logo{
        background-color: #ABBBCC;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 160px;
        width: 100%;
        border-radius: 10px 10px 0px 0px;
    }

    p{
        color: rgba(12, 25, 50, 0.6);
    }


    .wrapper-items{

        h3{
        font-weight: 600;
        font-size:18px;
        height: 54px;
        }

        p{
            font-weight: 400;
            font-size: 14px;
            
        }

    }

    .award{
        display: flex;
        justify-content:center;
        align-items:center;
        font-weight: 400;
        font-size: 14px;
        gap: 8px;
    }

    .budget{
        display: flex;
        justify-content: space-between;
        p{
            font-weight: 400;
            font-size: 14px;
        }

    }

    .budget-item{
   
        h1{
            font-weight: 600;
            font-size:12px;
        }
    }

    .revenue-item{

        h1{
            font-weight: 600;
            font-size:12px;
        }
    }

    .card-content{
        display: grid;
        padding: 16px 16px 20px 16px;
        gap: 18px;
    }

`
