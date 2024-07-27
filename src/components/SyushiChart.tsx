import { useTheme } from "@mui/material/styles";
import { LineChart, axisClasses } from '@mui/x-charts';
import { ChartsTextStyle } from '@mui/x-charts/ChartsText';
import Title from "./Title";


// Generate Sales Data
function createData(
    time: string,
    amount?: number,
  ): { time: string; amount: number | null } {
    return { time, amount: amount ?? null };
  }
  
  const data = [
    createData('7/6', 15000),
    createData('7/7', -30000),
    createData('7/13', 50000),
    createData('7/14', 100),
    createData('7/20', -40000),
    createData('7/21', -30000),
    createData('7/27', 50000),
    createData('7/28', 40000),
  ];

export default function SyushiChart() {
    const theme = useTheme();
  
    return (
      <>
        <Title>７月の収支</Title>
        <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden' }}>
          <LineChart
            dataset={data}
            margin={{
              top: 16,
              right: 20,
              left: 70,
              bottom: 30,
            }}
            xAxis={[
              {
                scaleType: 'point',
                dataKey: 'time',
                tickNumber: 2,
                tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
              },
            ]}
            yAxis={[
              {
                label: '収支',
                labelStyle: {
                  ...(theme.typography.body1 as ChartsTextStyle),
                  fill: theme.palette.text.primary,
                },
                tickLabelStyle: theme.typography.body2 as ChartsTextStyle,
                max: 100000,
                min: -100000,
                tickNumber: 3,
              },
            ]}
            series={[
              {
                dataKey: 'amount',
                showMark: false,
                color: theme.palette.primary.light,
              },
            ]}
            sx={{
              [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
              [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
              [`& .${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translateX(-25px)',
              },
            }}
          />
        </div>
      </>
    );
  }