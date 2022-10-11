import React from 'react'
import styled from 'styled-components';
import CtaButton from './CtaButton';
import SmallHeading from './SmallHeading';
import blockchain from '../assets/img/bchain.png';

function MainContent() {
    return (
        <MainContentStyled >
            <div className="content">
                <div className="left">
                    <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'} />
                  
                    <h1>
                    Expenses can be categorized in a variety of ways. Expenses can be defined as fixed expenses! <span className='GradientText'>Awesome NFTs</span> 
                    </h1>
                    <p>
                    An expense is a cost that businesses incur in running their operations. Expenses include wages, salaries, maintenance, rent, and depreciation. Expenses are deducted from revenue to arrive at profits. Businesses are allowed to deduct certain expenses from taxes to help alleviate the tax burden and bulk up profits.                   
                    </p>
                    <div className="btns-con">
                        <CtaButton name={'discover more'} />
                        <CtaButton name={'get help'} />
                    </div>
                </div>
                <div className="right">
                    <img src={blockchain} alt="" />
                </div>
            </div>
        </MainContentStyled >
    )
}


const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 100%;
    .content{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100%;
        width: 100%;
        .left{
            display: flex;
            justify-content: center;
            flex-direction: column;
            h1{
                padding: 1.8rem 0;
                color:white;
            }
            p{
                color:white;
            }
            .btns-con{
                margin-top: 3rem;
            }
        }

        .right{
            img{
                position: absolute;
                right: -11%;
                bottom: -1%;
                width: 60%;
            }
        }
    }
`;
export default MainContent;
