# Regulatory Outline

This CSS-only module contains the styles required to create the list of steps in the following graphic:

<img src="https://raw.githubusercontent.com/cagov/design-system/main/components/regulatory-outline/img/regulatory-outline-screenshot.png" />

## Sample HTML

```
<ol class="regulatory-outline">
    <li>LEVEL ONE A law enforcement agency may only use a person under 21 years of age to attempt to purchase alcoholic beverages for delivery to apprehend licensees, or employees or agents of licensees, who deliver alcoholic beverages to minors (persons under 21 years of age), and to reduce deliveries of alcoholic beverages to minors, in a fashion that promotes fairness. For purposes of this section, fairness is defined as compliance with all the conditions set forth in subdivision (e).</li>
    <li>For purposes of this section, “delivery” shall mean any transfer of alcoholic beverages by a licensee, or an employee or agent of a licensee, to a person under 21 years of age, pursuant to an order made by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises.</li>
    <li>For purposes of this section, “agent” shall mean any entity or person the licensee uses to deliver alcoholic beverages to persons who place orders by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises, whether by contract or agreement, even if not an employee of the licensee, including but not limited to a third-party delivery person or service.</li>
    <li>For purposes of this section, “minor decoy” shall mean a person used by law enforcement pursuant to Business and Professions Code section 25658(f).</li>
    <li>The following minimum standards shall apply to actions filed pursuant to Business and Professions Code Section 25658 in which it is alleged a minor decoy has been furnished an alcoholic beverage by delivery:

        <ol>
            <li>LEVEL TWO A law enforcement agency may only use a person under 21 years of age to attempt to purchase alcoholic beverages for delivery to apprehend licensees, or employees or agents of licensees, who deliver alcoholic beverages to minors (persons under 21 years of age), and to reduce deliveries of alcoholic beverages to minors, in a fashion that promotes fairness. For purposes of this section, fairness is defined as compliance with all the conditions set forth in subdivision (e).</li>
            <li>For purposes of this section, “delivery” shall mean any transfer of alcoholic beverages by a licensee, or an employee or agent of a licensee, to a person under 21 years of age, pursuant to an order made by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises.</li>
            <li>For purposes of this section, “agent” shall mean any entity or person the licensee uses to deliver alcoholic beverages to persons who place orders by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises, whether by contract or agreement, even if not an employee of the licensee, including but not limited to a third-party delivery person or service.</li>
            <li>For purposes of this section, “minor decoy” shall mean a person used by law enforcement pursuant to Business and Professions Code section 25658(f).</li>
            <li>The following minimum standards shall apply to actions filed pursuant to Business and Professions Code Section 25658 in which it is alleged a minor decoy has been furnished an alcoholic beverage by delivery:

                <ol>
                    <li>LEVEL THREE A law enforcement agency may only use a person under 21 years of age to attempt to purchase alcoholic beverages for delivery to apprehend licensees, or employees or agents of licensees, who deliver alcoholic beverages to minors (persons under 21 years of age), and to reduce deliveries of alcoholic beverages to minors, in a fashion that promotes fairness. For purposes of this section, fairness is defined as compliance with all the conditions set forth in subdivision (e).</li>
                    <li>For purposes of this section, “delivery” shall mean any transfer of alcoholic beverages by a licensee, or an employee or agent of a licensee, to a person under 21 years of age, pursuant to an order made by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises.</li>
                    <li>For purposes of this section, “agent” shall mean any entity or person the licensee uses to deliver alcoholic beverages to persons who place orders by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises, whether by contract or agreement, even if not an employee of the licensee, including but not limited to a third-party delivery person or service.</li>
                    <li>For purposes of this section, “minor decoy” shall mean a person used by law enforcement pursuant to Business and Professions Code section 25658(f).</li>
                    <li>The following minimum standards shall apply to actions filed pursuant to Business and Professions Code Section 25658 in which it is alleged a minor decoy has been furnished an alcoholic beverage by delivery:
                        <ol>
                            <li>LEVEL FOUR A law enforcement agency may only use a person under 21 years of age to attempt to purchase alcoholic beverages for delivery to apprehend licensees, or employees or agents of licensees, who deliver alcoholic beverages to minors (persons under 21 years of age), and to reduce deliveries of alcoholic beverages to minors, in a fashion that promotes fairness. For purposes of this section, fairness is defined as compliance with all the conditions set forth in subdivision (e).</li>
                            <li>For purposes of this section, “delivery” shall mean any transfer of alcoholic beverages by a licensee, or an employee or agent of a licensee, to a person under 21 years of age, pursuant to an order made by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises.</li>
                            <li>For purposes of this section, “agent” shall mean any entity or person the licensee uses to deliver alcoholic beverages to persons who place orders by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises, whether by contract or agreement, even if not an employee of the licensee, including but not limited to a third-party delivery person or service.</li>
                            <li>For purposes of this section, “minor decoy” shall mean a person used by law enforcement pursuant to Business and Professions Code section 25658(f).</li>

                            <li>A law enforcement agency may only use a person under 21 years of age to attempt to purchase alcoholic beverages for delivery to apprehend licensees, or employees or agents of licensees, who deliver alcoholic beverages to minors (persons under 21 years of age), and to reduce deliveries of alcoholic beverages to minors, in a fashion that promotes fairness. For purposes of this section, fairness is defined as compliance with all the conditions set forth in subdivision (e).</li>
                            <li>For purposes of this section, “delivery” shall mean any transfer of alcoholic beverages by a licensee, or an employee or agent of a licensee, to a person under 21 years of age, pursuant to an order made by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises.</li>
                            <li>For purposes of this section, “agent” shall mean any entity or person the licensee uses to deliver alcoholic beverages to persons who place orders by internet, telephone, other electronic means, or any method of ordering other than in person at the licensed premises, whether by contract or agreement, even if not an employee of the licensee, including but not limited to a third-party delivery person or service.</li>
                            <li>For purposes of this section, “minor decoy” shall mean a person used by law enforcement pursuant to Business and Professions Code section 25658(f).</li>
                            <li>The following minimum standards shall apply to actions filed pursuant to Business and Professions Code Section 25658 in which it is alleged a minor decoy has been furnished an alcoholic beverage by delivery:</li>
                        </ol>
                    </li>
                </ol>
            </li>
        </ol>
    </li>
</ol>
```

### Expected variables

none.

### Available commands for developers.

`npm run build` - Generate css from scss files.

`npm run test` - Run headless tests with [Open Web Componenents](https://open-wc.org/).

`npm run test:visual` Run headed tests with [Open Web Componenents](https://open-wc.org/).
