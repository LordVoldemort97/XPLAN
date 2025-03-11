import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';

// Sample data - in a real app, this would come from your backend
const samplePayments = [
  {
    id: 1,
    employeeName: 'John Doe',
    amount: 5000,
    currency: 'USD',
    date: '2024-02-01',
    type: 'Salary',
  },
  {
    id: 2,
    employeeName: 'Jane Smith',
    amount: 18750,
    currency: 'SAR',
    date: '2024-02-01',
    type: 'Bonus',
  },
];

const PaymentTracker = () => {
  const [payments, setPayments] = useState(samplePayments);
  const [newPayment, setNewPayment] = useState({
    employeeName: '',
    amount: '',
    currency: 'USD',
    date: '',
    type: 'Salary',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPayment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payment = {
      id: payments.length + 1,
      ...newPayment,
      amount: parseFloat(newPayment.amount),
    };
    setPayments((prev) => [...prev, payment]);
    setNewPayment({
      employeeName: '',
      amount: '',
      currency: 'USD',
      date: '',
      type: 'Salary',
    });
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Payment Tracker
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Add New Payment
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Employee Name"
                      name="employeeName"
                      value={newPayment.employeeName}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Amount"
                      name="amount"
                      type="number"
                      value={newPayment.amount}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel>Currency</InputLabel>
                      <Select
                        name="currency"
                        value={newPayment.currency}
                        onChange={handleChange}
                        label="Currency"
                      >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="SAR">SAR</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Date"
                      name="date"
                      type="date"
                      value={newPayment.date}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required>
                      <InputLabel>Payment Type</InputLabel>
                      <Select
                        name="type"
                        value={newPayment.type}
                        onChange={handleChange}
                        label="Payment Type"
                      >
                        <MenuItem value="Salary">Salary</MenuItem>
                        <MenuItem value="Bonus">Bonus</MenuItem>
                        <MenuItem value="Commission">Commission</MenuItem>
                        <MenuItem value="Overtime">Overtime</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Add Payment
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Payment History
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Employee</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Type</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {payments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.employeeName}</TableCell>
                        <TableCell>
                          {formatCurrency(payment.amount, payment.currency)}
                        </TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{payment.type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentTracker; 