import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import BasicLayout from '@/components/layouts/Basic'
import Orders from '@/components/blocks/Orders'
import Basket from '@/components/blocks/Basket'

import { Container } from './styles'

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const BasketPage = () => {
  const [value, setValue] = useState(0)
  const { user } = useSelector(store => store)
  if (!user.id) {
    return <Redirect to="/login" />
  }
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <BasicLayout>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Корзина" {...a11yProps(0)} />
              <Tab label="Заказы" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <div
            role="tabpanel"
            hidden={value !== 0}
            id={'simple-tabpanel-0'}
            aria-labelledby={'simple-tab-0'}
          >
            {value === 0 && (
              <Box sx={{ p: 3 }}>
                <Basket></Basket>
              </Box>
            )}
          </div>
          <div
            role="tabpanel"
            hidden={value !== 1}
            id={'simple-tabpanel-1'}
            aria-labelledby={'simple-tab-1'}
          >
            {value === 1 && (
              <Box sx={{ p: 3 }}>
                <Orders></Orders>
              </Box>
            )}
          </div>
        </Box>
      </Container>
    </BasicLayout>
  )
}

export default BasketPage
