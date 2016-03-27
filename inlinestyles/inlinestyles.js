var Styles = {
  controlContainer : {
    borderBottom : '1px solid pink',
    padding : 20,
    boxSizing : 'border-box',
    display : 'flex',
    flexDirection: 'column',
    // background: 'red'
  },
  MainControl:{
    height: 60,
    // background: 'blue',
    display : 'flex',
    flexDirection: 'column'
  },
  SubControl:{
    // outline: '1px solid pink',
    // background:'pink',
    // width: 20,
    display : 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  SubControl2 : {
    // outline:  '1px solid pink',
    padding:0,
    height:30,
    // width:80,
    paddingTop : 5,
    fontSize: 12,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection:  'row',
  },
  SubInput: {
    outline: '1px pink solid',
    width:30,
    height:16,
    margin: 2,
    padding:0,
    border: 'none',
    borderRadius: 5,
    color: 'red',
    // background: 'red',
    fontSize: '10',
    fontWeight: 'bold',
    textAlign:  'center',
  }
}


export default Styles
