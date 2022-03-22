import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    align-items:center;
    justify-content:center;
`
export const Logo = styled.Image`
    height: 70%;
    width:47%;
    margin-left: 17px;
`
export const Header = styled.View`
    /*     background-color: red; */
    height:80px ;
    width: 100%;
    align-items:center ;
    padding-left:30px ;

    border-color: #eee;
    box-shadow: 10px 5px 5px #000;
    elevation: 3;
    flex-direction:row ;

    /* shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
 */
`
export const Return = styled.TouchableOpacity``
export const DetailScroll = styled.ScrollView``
export const Test = styled.View`
    flex-direction:row ;
    align-items:center ;
`
export const Icon = styled.View`
    margin-left:15px ;
`
export const Slider = styled.FlatList`
    height:230px;
    padding: 0 16px;
`
export const Title = styled.Text`
    margin-top: 25px ;
    font-weight:bold;
    text-align:left;
    font-size:25px ;
    color: #2ab598;
    margin-left: 30px;
`
export const Description = styled.Text`
    margin-top:15px;
    width: 372px;
    height: 182px;
    color:#666666;
    margin-left: 30px;
`
export const ImageBackground = styled.Image`
    width: 366px;
    height: 244px;
    margin-left: 23px;

    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
`