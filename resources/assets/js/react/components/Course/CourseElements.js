import styled from 'styled-components';
import whymebg from '../../images/test2bg.jpeg';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { VscSearchStop } from 'react-icons/vsc';

export const Container = styled.div`
    display: flex;
    width: 100%;
    background: #fff;
    z-index: 1;
    direction: rtl;

    @media screen and (max-width: 770px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Left = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-bottom: -20px;

    @media screen and (max-width: 770px) {
        width: 90%;
    }
`

export const Sticky = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
`

export const Right = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 2vw 0;
`

export const Top = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 770px) {
        height: 300px;
    }
`

export const TContainer = styled.div`
    width: 90%;
    padding: 20px 10px;
    height: 95%;
    background: #F4DD4F;
    border-radius: 0 0 25px 25px;
`

export const Bottom = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 770px) {
        height: 35vh;
        justify-content: center;
    }
`

export const Img = styled.img`
    width: auto;
    height: 100%;
`

export const H1 = styled.h1`
    font-size: clamp(2rem, 3vw, 2.5rem);
    width: 100%;
    text-align: center;
`

export const P = styled.p`
    font-size: clamp(1rem, 2vw, 1.5rem);
`

export const SearchContainer = styled.form`
    width: 100%;
    min-height: 70px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 0 0 20px 20px;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Searchs = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
`

export const Search = styled.input`
    width: 70%;
    height: 35px;
    border-radius: 0 10px 5px 0;
    border: none;
    padding: 0 10px;
    background: #eee;
`

export const Submit = styled.button`
    width: 20%;
    height: 35px;
    border-radius: 10px 0 0 5px;
    border: none;
    background: #F4DD4F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

export const Block = styled.div`
    width: 250px;
    height: 300px;
    background: #F4DD4F;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    @media screen and (max-width: 250px) {
        width: 95%;
    }
`

export const MainB = styled(Link)`
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: unset;
`

export const Photo = styled.div`
    width: 100%;
    height: 45%;
    background: url(${whymebg});
    background-size: cover;
`

export const Name = styled.div`
    width: 100%;
    height: 35%;
`

export const Price = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const NameH = styled.h2`
    padding: 10px;
`

export const Green = styled.div`
    width: 95%;
    height: 85%;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Pn = styled.p`
    direction: rtl;
`

export const FilterContainer = styled.div`
    width: 90%;
    background: #eee;
    margin-bottom: 20px;
    border-radius: 5px 5px 10px 10px;
    display: flex;
    flex-wrap: wrap;
`

export const Filter = styled.div`
    padding: 4px;
    margin: 6px;
    border-radius: 5px;
    background: #fff;
    width: 100%;
`

export const SelectS = styled(Select)`
    width: 100%;
`

export const NoResult = styled.div`
    width: 60%;
    height: 200px;
    font-size: 40px;
    direction: rtl;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F4DD4F;
    border-radius: 20px;
    margin-top: 50px;
`

export const VscSearchStops = styled(VscSearchStop)`
    font-size: 100px;
`

export const OtherCourses = styled.div`
    width: 90%;
    min-height: 350px;
    border-radius: 10px;
    margin: 40px 0 10px 0;
    background: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const OCTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
`

export const OCHR = styled.hr`
    border: 1px solid gray;
    width: 50%;
`

export const OCBottom = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    background: #00000050;
`

export const H3 = styled.h3`
    direction: rtl;
    font-size: 30px;
`

export const Suggested = styled.div`
    width: 500px;
    height: 250px;
    background: #F4DD4F;
    margin: 0 10px;
    border-radius: 10px;
    overflow: scroll;
`